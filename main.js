function startClassification() {
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/RHNiPzMbS/model.json', modelReady);

}
function modelReady() {
    classifier.classify(gotResult);
}
function gotResult(error, results) {
    
}