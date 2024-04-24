from flask import Flask,render_template
app=Flask(__name__)
@app.route('/',methods=['GET'])
def index():
    return render_template('index.html')
@app.route('/documentation',methods=['GET'])
def documentation():
    return render_template('documentation.html')
@app.route('/game',methods=['GET'])
def game():
    return render_template('game.html')
app.run()