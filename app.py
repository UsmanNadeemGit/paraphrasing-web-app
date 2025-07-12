import subprocess
from datetime import datetime
from flask import Flask, request, jsonify, render_template
import re

app = Flask(__name__)

def extract_paraphrased_sentence(model_output):
    # Try to extract the first quoted sentence, or fallback to the first line
    match = re.search(r'"([^"]+)"', model_output)
    if match:
        return match.group(1)
    # Fallback: return the first non-empty line
    for line in model_output.splitlines():
        line = line.strip()
        if line:
            return line
    return model_output.strip()

def paraphrase(text, tone, length_preference, creativity):
    # Get current date
    current_date = datetime.now().strftime("%A, %B %d, %Y")
    word_count = len(text.split())
    # Set explicit length instructions
    if length_preference == "same length":
        length_instruction = f"Keep the paraphrased sentence within plus or minus 2 words of the original length ({word_count} words)."
    elif length_preference == "shorter":
        target = max(1, word_count - 3)
        length_instruction = f"Make the paraphrased sentence shorter than the original, ideally around {target} words."
    elif length_preference == "more detailed":
        target = word_count + 5
        length_instruction = f"Make the paraphrased sentence more detailed, ideally around {target} words."
    else:
        length_instruction = "Keep the paraphrased sentence a similar length to the original."

    # Construct prompt with user-selected options
    prompt = (
        f"Today is {current_date}.\n"
        f"Paraphrase the following sentence with a {creativity} level of variation, "
        f"in a {tone} tone. {length_instruction}\n"
        f'Original sentence ({word_count} words): "{text}"'
    )

    try:
        result = subprocess.run(
            ["ollama", "run", "llama3:8b"],
            input=prompt,
            text=True,
            capture_output=True
        )

        if result.returncode == 0:
            output = extract_paraphrased_sentence(result.stdout.strip())
            return {"success": True, "output": output}
        else:
            return {"success": False, "error": result.stderr}
    
    except FileNotFoundError:
        return {"success": False, "error": "Ollama is not installed or not found in PATH."}
    except Exception as e:
        return {"success": False, "error": str(e)}

@app.route("/paraphrase", methods=["POST"])
def paraphrase_api():
    data = request.get_json()
    text = data.get("text", "")
    tone = data.get("tone", "neutral")
    length_preference = data.get("length_preference", "same length")
    creativity = data.get("creativity", "moderate")
    result = paraphrase(text, tone, length_preference, creativity)
    return jsonify(result)

@app.route("/")
def home():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)