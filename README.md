# StockAnalyser-Frontend
Frontend for StockAnalyser app built in React.

Work In Progress - Current functionality includes:
- Displaying mock data for ASX companies in tabular format.
- Click industry sector dropdowns.

* Search and company select functionality in progress *


# Local Setup

### Backend
Initialise Project

cd backend

Activate virtual environment:
    - source venv/bin/activate

// TODO: Write deployment script
While in virtual environment:
    - pip3 install django
    - pip3 install djangorestframework
    - pip3 install django-cors-headers
    - pip3 install psycopg2-binary
    - pip3 install crochet
    - pip3 install bs4
    - pip3 install scrapy_djangoitem
    - pip3 install scrapy-fake-useragent
    - pip3 install Scrapy-UserAgents
    - pip3 install yfinance

To run project:

- Open pGAdmin4 and run Database

cd stock_analyser
python3 ./manage.py makemigrations
python3 ./manage.py migrate
python3 ./manage.py runserver

### Frontend
cd stock-analyser

npm run build

npm run dev

## Tech Stack

Typscript, NextJS, Redux
Material-UI, CSS Grids

# Licence

Shield: [![CC BY-NC-ND 4.0][cc-by-nc-nd-shield]][cc-by-nc-nd]

This work is licensed under a
[Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License][cc-by-nc-nd].

[![CC BY-NC-ND 4.0][cc-by-nc-nd-image]][cc-by-nc-nd]

[cc-by-nc-nd]: http://creativecommons.org/licenses/by-nc-nd/4.0/
[cc-by-nc-nd-image]: https://licensebuttons.net/l/by-nc-nd/4.0/88x31.png
[cc-by-nc-nd-shield]: https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-lightgrey.svg

