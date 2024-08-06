from flask import Flask
app = Flask(__name__)  

@app.route('/')
def hello_world():
    return '<h1>Esto es un ejemplo de Flask de Python en Apache Server</h1><br><img src = "https://vicpimakers.ca/wp-content/uploads/2022/05/apache_flask.jpg">'

if __name__ == '__main__':
       app.run('0.0.0.0',5000, debug=True)