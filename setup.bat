@echo off
REM ============================================
REM  Myportfolio - one-click environment setup
REM  Double-click this file OR run it from the
REM  terminal inside the project folder:
REM      setup.bat
REM ============================================

echo Creating virtual environment (venv)...
py -m venv venv

echo Activating virtual environment...
call venv\Scripts\activate.bat

echo Upgrading pip...
python -m pip install --upgrade pip

echo Installing dependencies from requirements.txt...
pip install -r requirements.txt

echo.
echo ============================================
echo   Setup complete!
echo   From now on, before running the server:
echo     1. venv\Scripts\activate.bat
echo     2. python manage.py runserver
echo ============================================
pause
