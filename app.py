from flask import Flask, render_template, redirect, url_for, request

app = Flask(__name__)
app.config['DEBUG'] = True 

@app.route('/', methods = ['GET', 'POST'])
def index():
    return render_template('index.html')

@app.route('/about', methods = ['GET', 'POST'])
def about():
    return render_template('about.html')

@app.route('/services', methods = ['GET', 'POST'])
def services():
    return render_template('services.html')

@app.route('/contact', methods = ['GET', 'POST'])
def contact():
    return render_template('contact.html')

if __name__ == "__main__":
    app.run(debug = True)