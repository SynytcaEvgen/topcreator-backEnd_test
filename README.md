# topcreator-test-task
!!!Додаток використовує версію Node.js 20.11.1
nmv use
Прерш за все треба створити файл .env на базі .env.example просто видаллити .example за назви файлу

Для запуску застосунку є три варіанти
1. Docker full 
Це означає що застосунок та база даних занаходятся в docker контейнері та запускаються за допомогою команди
 - docker-compose up -d
Але перед запуском требв встановити docker network
 - docker network create setnet
та правильно прописати host для підєднная до DB
В моєму випадку це 172.23.0.2
Щоб занайти цей хост треба ввже зараненому контейнері зайти
docker exec -it <id-конейнера> bash
далі
cd /etc/
cat hosts
та знайти хост він буде виглядати так host <id-конейнера>

2. Docker DB 
Це той випадок де застосунок запускається за допомогою
npm i
npm run build
npm run serve
або
npm i
npm run start-dev
а базаданных знаходиться в docker container
MongoDB можна підняти за допомогою docker-compose
для цього потрібно в файлі docker-compose.yml закоментувети server сервіс
а також налаштувати зєднная як описонно тут
<a href="https://medium.com/workleap/the-only-local-mongodb-replica-set-with-docker-compose-guide-youll-ever-need-2f0b74dd8384">Лінка на статью</a>

3. База данных знаходиться на сервері

Запустити застосунок за командами
'''
npm i
npm run build
npm run serve
'''
або
'''
npm i
npm run start-dev
'''
