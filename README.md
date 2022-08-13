### Local Test
After exporting the tfjs model, clone this repo:
```
git clone https://github.com/proDev-Theron/dip-plantidentifier.git
cd dip-plantidentifier
```
Install packages with npm:
```
npm install
```
Link YOLOv5 weights directory into the 'public' folder:
```
ln -s ../../yolov5/yolov5s_web_model public/web_model
```
Run the react app with:
```
npm start
```

Run
```
npm run deploy
```

PS: <del> This repo assumes the model input resolution is 640x640. </del>
If you change the `--img` value in exporting `*.pb`, change `modelWidth` and `modelHeight` in `src/index.js` accordingly.