# Project_4_Movie Rating Prediction Model 

<br>

![Thor_love_and_Thunder_2.jpeg](/Images/Thor_love_and_Thunder_2.jpeg)

<br>

## Background and Context:

<br>

### The Movie World:  Defining the problem

<br>

Movie industry is a volatile high investment / high risk industry. 

<br>

After two decades of boom in terms of volume and revenue. The last five years has seen a decline in revenue and the last three years, a reduction in volume.

![Revenue_and_Volume_by_Year.png](/Images/Revenue_and_Volume_by_Year.png)

<br>

Understanding the drivers for success is critical to minimise financial and reputational risk. 

<br>

### Measures of Success

<br>

Movie ratings come from a wide range of features and can be used as one proxy as a measure of success. Ratings score from 1-10. While the average sits within a narrow margin, it has been trending up in recent years with a sharp increase in 2022 

<br>

![Ratings_Trended_Over_Time.png](/Images/Ratings_Trended_Over_Time.png)

<br>

### Opportunities to use the model

<br>

This is a B2B Product with Movie Production Companies & Independent Production Companies as our key target clients 

<br>

### The Predicting Model – The solution

<br>

The Movie Rating Prediction Model predicts rating of a movie based on a range of features

<br>

## Building the Model

<br>

The diagram below provides an overview of the process and applications/products/ resources used to enable project delivery. 

<br>

![Process_Overview.png](/Images/Process_Overview.png)

<br>

The model is presented in three parts:
* ETL
* Model Build
* Deployment 

<br>

### ETL: Data extraction - via API

<br>

The data extraction via the API was one of the biggest challenges of the project. The API for the original data source that appeared to provide access to the most complete data set proved too difficult to work with. 

<br>

Three APIs were required to source a complete data set.

<br>

* OMDB API - https://www.omdbapi.com/ 
* MOVIE DB API - https://www.themoviedb.org/  
* IMDb API - https://www.imdb.com/ 

<br>

The combined outputs included data from > 870,000 movies and > 40 features as shown in the diagram below. This data required significant wrangling. The key challenge was that the data could only be extracted one movie at a time for two of the data sources. This took significant time. To overcome this challenge data was extracted via multiple jupyter notebooks simultaneously. 

<br>

![Raw_data_APIs.png](/Images/Raw_data_APIs.png)

<br>

### ETL: Data extraction - web Scraping 

<br>

The datasets sourced via the APIs did not provide all the information required for the model. The extra fields was scraped using Beautiful Soup from two sources 
* https://www.imdb.com/list/ls022928836/
* https://www.imdb.com/list/ls022928819

<br>

![web_scraping_actors.png](/Images/web_scraping_actors.png)

<br>

The final outputs of this extraction phase were 102 CSV files 

<br>

### ETL: Data transformation and loading 

<br>

With use of pandas and multiple methods, the consolidation of the 102 cvs/tsv files was made very efficient with the following code 

<br>

![data_consolidation.png](/Images/data_consolidation.png)

<br>

Background analysis of raw data was undertaken using a consolidated data set with over 153,000 movies from 1990 – 2022 and over 100 features

<br>

With use of pandas and properties, methods and functions, data transformation included:
* Converting the concatenated files to df’s
* Cleaning and joining e.g. df2.loc[(df2.isAdult==0) ,:]
* Dropping values - drop NAs
* The outputs included:
- First iteration of groupings 
- a suite of CSV files
* Exporting CSV file

<br>

This was an iterative process and the insights gathered informed the design of the model. For example: 

<br>

Correlations were not found when looking at single features as shown in the heat map below:

<br>

![correlation.png](/Images/correlation.png)

<br>

However, when exploring the trends in the ten top movies using multiple features in Tableau; distinct trends emerged. Movies that generated high revenue and high ratings showed consistency in terms of:
* Genre – ‘Action’ was present in all mixed genre groups
* Rated – all were rated PG-13
* A-list Actors
* Belong to a collection
* Month of release
* Multiple languages
* US-based production company 

<br>

The final output for this first phase was 2 data sets 

<br>

1. Model Dataset: >42K movies 2017-2022 45 features
2. Analysis Dataset: >153K movies 1990-2022 >100 features 

<br>

### Model Build 

<br>

The model build involved" 
* Transposing multi stringed categories and one-hot encoded for numeric values
* Dropping insignificant count values to increase model accuracy
* Reducing the original 46 features to 26 to predict success
* Outcome to predict - average rating, score out of 10
* Average ratings grouped into 5 classifications -  A, B, C, D & E

<br>

The diagram below provides an illustrative view of how categories in a single column were separated and converted to a numerical value using One-hot encoding

<br>

![model_build.png](/Images/model_build.png)

<br>

### Data Modelling

<br>

Several models e.g. Logistic Regression, KNN, SVM, Naive Bayes, were explored as potential options

<br>

Random Machine Learning Model was selected to predict a successful movie. Success is measured as average rating score. The average ratings grouped were grouped into 5 bins and each bin allocated to a classification - A, B, C, D & E

<br>

### Overview of process and resources used

<br>

* Train – Test – Split (30% train and 70% test was chosen to work within the GitHub 100MB limit in terms of file size)
* Normalise the Train and Test data using MinMaxScaler
* GridSearchCV used to research and identify optimal parameters
* Export the model using Joblib

<br>

### Model output

<br>

![model_output.png](/Images/model_output.png)

<br>

## Web app build

<br>

The Web app is built using Flask.

<br>

When the app is launched, it renders the homepage index.html.

<br>


The UI is built in the index.html for the user to input the data. 

<br>


Once the user keys in the data and hits submit, a Javascript will be called to read the data, scale it, and then request a restful API call to connect the Flask app.

<br>

The Flask app will load the Machine Learning model, pass the input parameters in and calculate the prediction result. 

<br>

The result will be decoded and returned to Javascript for display on the webpage via D3.

<br>

The Web app was tested successfully on local machine.

<br>

### Deployment online

<br>

Dependencies for Heroku were added. These included runtime (Python environment), requirement (required libraries) and procfile (web app address).
<br>

The web app is now ready to be deployed on Heroku.
It was deployed successfully at: https://movies-rating-prediction.herokuapp.com/

<br>

The diagram below provides an illustrative overview of the web app build and deployment process:

<br>

![prediction_model.png](/Images/prediction_model.png)

<br>

## Conclusion 

<br>

The key findings from our analysis showed that genres preferences have changed over the last 3 decades with action, drama and documentaries being the preferences for the last decade.

<br>

Movie Budgets and Revenue does not directly correlate with movie success. There are lots of other variables (factors) that influence the success or not success of a movie. 

<br>

Each feature per se. does not have a correlation in the success of a movie but a set of features are required to predict the rating of a project as a proxy for its success.

<br>


The concrete benefit of this model lies in the potential to:
* Increase in the return of Investment
* Mitigate risks involved in the release of a movie

<br>
 
# THE END


