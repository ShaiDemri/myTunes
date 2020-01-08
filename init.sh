echo 'Starting server'

cd Backend
echo installing server dependencies
npm install
npm start &
echo 'Server is up and running'
sleep 3s

echo 'Starting myTunes app'
cd ../Frontend
echo installing app dependencies
npm install
npm start
echo 'myTunes is up and running. Enjoy!'