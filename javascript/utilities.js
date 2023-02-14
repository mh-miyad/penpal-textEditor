const textEditor = document.getElementById('text-editor');
const colorPicker = document.getElementById('color-picker');
const textBold = document.getElementById('text-bold');
const textItalic = document.getElementById('text-italic');
const textUnderline = document.getElementById('text-underline');
const textCenter = document.getElementById('text-center');
const textJustify = document.getElementById('text-justify');
const textRight = document.getElementById('text-right');
const lineHeightSelect = document.getElementById("lineHeight");
const fontSelector = document.getElementById('font-selector');

const fontSizeSelect = document.getElementById("fontSize");

colorPicker.addEventListener("input", function () {
    textEditor.style.color = colorPicker.value;

});
textBold.addEventListener("click", function () {
    if (textEditor.style.fontWeight == 'bold') {
        textEditor.style.fontWeight = 'normal'

    } else {
        textEditor.style.fontWeight = 'bold'
    }

});
textItalic.addEventListener("click", function () {
    if (textEditor.style.fontStyle == 'italic') {
        textEditor.style.fontStyle = 'normal'

    } else {
        textEditor.style.fontStyle = 'italic'
    }

});

textUnderline.addEventListener("click", function () {
    if (textEditor.style.textDecoration == 'underline') {
        textEditor.style.textDecoration = 'none'

    } else {
        textEditor.style.textDecoration = 'underline'
    }

});
textRight.addEventListener("click", function () {
    if (textEditor.style.textAlign == 'right') {
        textEditor.style.textAlign = 'left'

    } else {
        textEditor.style.textAlign = 'right'
    }

});
textCenter.addEventListener("click", function () {
    if (textEditor.style.textAlign == 'center') {
        textEditor.style.textAlign = 'left'

    } else {
        textEditor.style.textAlign = 'center'
    }

});
textJustify.addEventListener("click", function () {
    if (textEditor.style.textAlign == 'justify') {
        textEditor.style.textAlign = 'left'

    } else {
        textEditor.style.textAlign = 'justify'
    }

});

lineHeightSelect.addEventListener("change", function () {
    const selectedValue = lineHeightSelect.value;
    textEditor.style.lineHeight = selectedValue;
});


fontSizeSelect.addEventListener("change", function () {
    const selectedValue = fontSizeSelect.value;
    textEditor.style.fontSize = selectedValue;
});

fontSelector.onchange = () => {
    textEditor.style.fontFamily = fontSelector.value;
};