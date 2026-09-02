echo " BUILD START"
python3.9 -m pip install -r requirements.txt
python3.9 manage.py collectstatic --noinput --clear
<<<<<<< HEAD
=======
echo " BUILD END" 
echo " BUILD START"
python3.9 -m ensurepip --upgrade
python3.9 -m pip install --upgrade pip
python3.9 -m pip install -r requirements.txt
python3.9 manage.py collectstatic --noinput --clear
>>>>>>> df342f2980e10fa22e16b5a695560c339f08b30c
echo " BUILD END"