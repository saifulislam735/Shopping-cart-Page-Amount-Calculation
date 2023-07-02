document.getElementById('btn-case-plus-1').addEventListener('click', function () {
    getNumberByClick('input-1', true, 'innerText-1', 1219);
    subTotalCalculation();
})
document.getElementById('btn-case-minus-1').addEventListener('click', function () {
    getNumberByClick('input-1', false, 'innerText-1', 1219);
    subTotalCalculation();
})
document.getElementById('btn-case-plus-2').addEventListener('click', function () {
    getNumberByClick('input-2', true, 'innerText-2', 59);
    subTotalCalculation();
})
document.getElementById('btn-case-minus-2').addEventListener('click', function () {
    getNumberByClick('input-2', false, 'innerText-2', 59);
    subTotalCalculation();
})