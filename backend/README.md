# ERP Car Sales Automation

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python Version](https://img.shields.io/badge/Python-3.10-blue.svg)](https://www.python.org/downloads/release/python-310/)
[![Django Version](https://img.shields.io/badge/Django-5.0.3-green.svg)](https://docs.djangoproject.com/en/5.0/)

ERP Car Sales Automation is a Django-based web application for managing car sales, inventory, and customer interactions.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Development Server](#running-the-development-server)
- [Authors](#author)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Python (3.10 or higher)
- Django (5.0.3 or higher)
- Other dependencies listed in `requirements.txt`

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/jawokhirdev/erp-car-sales-automation.git
2. Change into the project directory:
   ```bash
   cd erp-car-sales-automation
3. Create and activate a virtual environment (optional but recommended):
   ```bash
   python3 -m venv env
   source env/bin/activate  # On macOS/Linux
   .\env\Scripts\activate    # On Windows
4. Install dependencies:
   ```bash
   pip install -r requirements.txt

### Running the Development Server
1. Apply database migrations:
   ```bash
   python manage.py migrate
2. Start the development server:
   ```bash
   python manage.py runserver
   ```
   You can now access the Django project at http://localhost:8000/.


### Author
   [Azizbek Sobitov](https://github.com/asobitov2005) - Backend Developer

    



