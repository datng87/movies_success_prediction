from flask import Flask, request,render_template,jsonify,redirect
from flask_restful import Resource, Api
import joblib
import pandas as pd
from flask_cors import CORS


app = Flask(__name__)
#
CORS(app)
# creating an API object
api = Api(app)

# prediction api call

@app.route("/")
def home():
    return render_template("index.html")

class prediction(Resource):
    def get(self, predict_input):
        # budget = request.args.get('budget')
        # Let's load the package
        
        input_data = predict_input.split(',')
        
        input_data_number = [float(numeric_string) for numeric_string in input_data]
            

        df = pd.DataFrame([input_data_number], columns=['startYear', 'runtimeMinutes',
       'number_of_languages', 'budget', 'is_in_collection', 'release_month',
       'popular_actors_count', 'rated_unknown', 'rated_R', 'rated_MA',
       'rated_Unrated', 'rated_PG', 'rated_TV-14', 'rated_PG-13', 'rated_G',
       'genre_Mystery', 'genre_Adventure', 'genre_Documentary', 'genre_Drama',
       'genre_Thriller', 'genre_Comedy', 'genre_Action', 'genre_unknown',
       'genre_Crime', 'genre_Horror', 'genre_Romance'])
        model = joblib.load('random_forest.joblib')
        prediction = model.predict(df)
        predict_result = prediction[0]
        if predict_result==0:
            predict_result = "E"
        elif predict_result ==1:
            predict_result = "D"
        elif predict_result ==2:
            predict_result = "C"
        elif predict_result ==3:
            predict_result = "B"
        elif predict_result ==4:
            predict_result = "A"
        else:
            predict_result = "Z"
        return jsonify(predict_result)


# data api
api.add_resource(prediction, '/prediction/<predict_input>')

if __name__ == '__main__':
    app.run(debug=True)
