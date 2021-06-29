$(document).ready(function() {

    var originTextArea = $('#origin-text');
    var resultTextArea = $('#converted-text');
    var copyBtn = document.querySelector('#copy-result');
    var transBtn = document.querySelector('#transTypeBtn');
    var transType = "txt2icn";

    function doConversion() {
        var originText = originTextArea.val();
        if (transType == 'txt2icn') {

            originText = originText.toLowerCase();
            originText = originText.replace(/a/g, "😀"); //Grinning Face
            originText = originText.replace(/à/g, "🤬"); //Face with Symbols on Mouth
            originText = originText.replace(/á/g, "😈"); //Smiling Face with Horns
            originText = originText.replace(/ả/g, "👿"); //Angry Face with Horns
            originText = originText.replace(/ã/g, "🤡"); //Clown Face
            originText = originText.replace(/ạ/g, "😺"); //Grinning Cat
            originText = originText.replace(/ă/g, "😆"); //Grinning Squinting Face
            originText = originText.replace(/ắ/g, "🤩"); //Star-Struck
            originText = originText.replace(/ằ/g, "😘"); //Face Blowing a Kiss
            originText = originText.replace(/ẳ/g, "😗"); //Kissing Face
            originText = originText.replace(/ẵ/g, "😋"); //Face Savoring Food
            originText = originText.replace(/ặ/g, "😛"); //Face with Tongue
            originText = originText.replace(/â/g, "😄"); //Grinning Face with Smiling Eyes
            originText = originText.replace(/ấ/g, "😜"); //Winking Face with Tongue
            originText = originText.replace(/ầ/g, "🤪"); //Zany Face
            originText = originText.replace(/ẩ/g, "😝"); //Squinting Face with Tongue
            originText = originText.replace(/ẫ/g, "🤑"); //Money-Mouth Face
            originText = originText.replace(/ậ/g, "🤗"); //Hugging Face
            originText = originText.replace(/b/g, "😃"); //Grinning Face with Big Eyes
            originText = originText.replace(/c/g, "😁"); //Beaming Face with Smiling Eyes
            originText = originText.replace(/d/g, "😅"); //Grinning Face with Sweat
            originText = originText.replace(/đ/g, "🤭"); //Face with Hand Over Mouth
            originText = originText.replace(/e/g, "🥰"); //Smiling Face with Hearts
            originText = originText.replace(/é/g, "🤫"); //Shushing Face
            originText = originText.replace(/è/g, "🤔"); //Thinking Face
            originText = originText.replace(/ẻ/g, "🤐"); //Zipper-Mouth Face
            originText = originText.replace(/ẽ/g, "🤨"); //Face with Raised Eyebrow
            originText = originText.replace(/ẹ/g, "😐"); //Neutral Face
            originText = originText.replace(/ê/g, "😑"); //Expressionless Face
            originText = originText.replace(/ế/g, "😶"); //Face Without Mouth
            originText = originText.replace(/ề/g, "😏"); //Smirking Face
            originText = originText.replace(/ể/g, "🙄"); //Face with Rolling Eyes
            originText = originText.replace(/ễ/g, "😬"); //Grimacing Face
            originText = originText.replace(/ệ/g, "🤥"); //Lying Face
            originText = originText.replace(/f/g, "🤣"); //Rolling on the Floor Laughing
            originText = originText.replace(/g/g, "🥲"); //Smiling Face with Tear
            originText = originText.replace(/h/g, "☺️"); //Smiling Face
            originText = originText.replace(/i/g, "😊"); //Smiling Face with Smiling Eyes
            originText = originText.replace(/í/g, "😌"); //Relieved Face
            originText = originText.replace(/ì/g, "😔"); //Pensive Face
            originText = originText.replace(/ỉ/g, "😪"); //Sleepy Face
            originText = originText.replace(/ĩ/g, "🤤"); //Drooling Face
            originText = originText.replace(/ị/g, "😴"); //Sleeping Face
            originText = originText.replace(/k/g, "😇"); //Smiling Face with Halo
            originText = originText.replace(/j/g, "😷"); //Face with Medical Mask
            originText = originText.replace(/l/g, "😉"); //Winking Face
            originText = originText.replace(/m/g, "😒"); //Unamused Face
            originText = originText.replace(/n/g, "😞"); //Disappointed Face
            originText = originText.replace(/o/g, "😙"); //Kissing Face with Smiling Eyes
            originText = originText.replace(/ó/g, "🤒"); //Face with Thermometer
            originText = originText.replace(/ò/g, "🤕"); //Face with Head-Bandage
            originText = originText.replace(/ỏ/g, "🤢"); //Nauseated Face
            originText = originText.replace(/õ/g, "🤮"); //Face Vomiting
            originText = originText.replace(/ọ/g, "🤧"); //Sneezing Face
            originText = originText.replace(/ô/g, "🥵"); //Hot Face
            originText = originText.replace(/ố/g, "🥶"); //Cold Face
            originText = originText.replace(/ồ/g, "🥴"); //Woozy Face
            originText = originText.replace(/ổ/g, "😵"); //Dizzy Face
            originText = originText.replace(/ỗ/g, "🤯"); //Exploding Head
            originText = originText.replace(/ộ/g, "🤠"); //Cowboy Hat Face
            originText = originText.replace(/ơ/g, "🥳"); //Partying Face
            originText = originText.replace(/ớ/g, "😎"); //Smiling Face with Sunglasses
            originText = originText.replace(/ờ/g, "🤓"); //Nerd Face
            originText = originText.replace(/ở/g, "🧐"); //Face with Monocle
            originText = originText.replace(/ỡ/g, "🙁"); //Slightly Frowning Face
            originText = originText.replace(/ợ/g, "😮"); //Face with Open Mouth
            originText = originText.replace(/p/g, "😟"); //Worried Face
            originText = originText.replace(/q/g, "😕"); //Confused Face
            originText = originText.replace(/r/g, "🙂"); //Slightly Smiling Face
            originText = originText.replace(/s/g, "🙃"); //Upside-Down Face
            originText = originText.replace(/t/g, "☹️"); //Frowning Face
            originText = originText.replace(/u/g, "😡"); //Pouting Face
            originText = originText.replace(/ú/g, "😯"); //Hushed Face
            originText = originText.replace(/ù/g, "😲"); //Astonished Face
            originText = originText.replace(/ủ/g, "🥺"); //Pleading Face
            originText = originText.replace(/ũ/g, "😦"); //Frowning Face with Open Mouth
            originText = originText.replace(/ụ/g, "😧"); //Anguished Face
            originText = originText.replace(/ư/g, "😨"); //Fearful Face
            originText = originText.replace(/ứ/g, "😰"); //Anxious Face with Sweat
            originText = originText.replace(/ừ/g, "😥"); //Sad but Relieved Face
            originText = originText.replace(/ử/g, "😢"); //Crying Face
            originText = originText.replace(/ữ/g, "😱"); //Face Screaming in Fear
            originText = originText.replace(/ự/g, "😖"); //Confounded Face
            originText = originText.replace(/v/g, "😍"); //Smiling Face with Heart-Eyes
            originText = originText.replace(/x/g, "😩"); //Weary Face
            originText = originText.replace(/y/g, "😭"); //Loudly Crying Face
            originText = originText.replace(/ý/g, "😣"); //Persevering Face
            originText = originText.replace(/ỳ/g, "😓"); //Downcast Face with Sweat
            originText = originText.replace(/ỷ/g, "😫"); //Tired Face
            originText = originText.replace(/ỹ/g, "😤"); //Face with Steam From Nose
            originText = originText.replace(/ỵ/g, "😚"); //Kissing Face with Closed Eyes
            originText = originText.replace(/w/g, "😳"); //Flushed Face
            originText = originText.replace(/z/g, "😠"); //Angry Face
            originText = originText.replace(/ /g, "."); //Replace space with dot

        } else if (transType == 'icn2txt') {
            originText = originText.toLowerCase();
            originText = originText.replace(/😀/g, "a"); //Grinning Face
            originText = originText.replace(/🤬/g, "à"); //Face with Symbols on Mouth
            originText = originText.replace(/😈/g, "á"); //Smiling Face with Horns
            originText = originText.replace(/👿/g, "ả"); //Angry Face with Horns
            originText = originText.replace(/🤡/g, "ã"); //Clown Face
            originText = originText.replace(/😺/g, "ạ"); //Grinning Cat
            originText = originText.replace(/😆/g, "ă"); //Grinning Squinting Face
            originText = originText.replace(/🤩/g, "ắ"); //Star-Struck
            originText = originText.replace(/😘/g, "ằ"); //Face Blowing a Kiss
            originText = originText.replace(/😗/g, "ẳ"); //Kissing Face
            originText = originText.replace(/😋/g, "ẵ"); //Face Savoring Food
            originText = originText.replace(/😛/g, "ặ"); //Face with Tongue
            originText = originText.replace(/😄/g, "â"); //Grinning Face with Smiling Eyes
            originText = originText.replace(/😜/g, "ấ"); //Winking Face with Tongue
            originText = originText.replace(/🤪/g, "ầ"); //Zany Face
            originText = originText.replace(/😝/g, "ẩ"); //Squinting Face with Tongue
            originText = originText.replace(/🤑/g, "ẫ"); //Money-Mouth Face
            originText = originText.replace(/🤗/g, "ậ"); //Hugging Face
            originText = originText.replace(/😃/g, "b"); //Grinning Face with Big Eyes
            originText = originText.replace(/😁/g, "c"); //Beaming Face with Smiling Eyes
            originText = originText.replace(/😅/g, "d"); //Grinning Face with Sweat
            originText = originText.replace(/🤭/g, "đ"); //Face with Hand Over Mouth
            originText = originText.replace(/🥰/g, "e"); //Smiling Face with Hearts
            originText = originText.replace(/🤫/g, "é"); //Shushing Face
            originText = originText.replace(/🤔/g, "è"); //Thinking Face
            originText = originText.replace(/🤐/g, "ẻ"); //Zipper-Mouth Face
            originText = originText.replace(/🤨/g, "ẽ"); //Face with Raised Eyebrow
            originText = originText.replace(/😐/g, "ẹ"); //Neutral Face
            originText = originText.replace(/😑/g, "ê"); //Expressionless Face
            originText = originText.replace(/😶/g, "ế"); //Face Without Mouth
            originText = originText.replace(/😏/g, "ề"); //Smirking Face
            originText = originText.replace(/🙄/g, "ể"); //Face with Rolling Eyes
            originText = originText.replace(/😬/g, "ễ"); //Grimacing Face
            originText = originText.replace(/🤥/g, "ệ"); //Lying Face
            originText = originText.replace(/🤣/g, "f"); //Rolling on the Floor Laughing
            originText = originText.replace(/🥲/g, "g"); //Smiling Face with Tear
            originText = originText.replace(/☺️/g, "h"); //Smiling Face
            originText = originText.replace(/😊/g, "i"); //Smiling Face with Smiling Eyes
            originText = originText.replace(/😌/g, "í"); //Relieved Face
            originText = originText.replace(/😔/g, "ì"); //Pensive Face
            originText = originText.replace(/😪/g, "ỉ"); //Sleepy Face
            originText = originText.replace(/🤤/g, "ĩ"); //Drooling Face
            originText = originText.replace(/😴/g, "ị"); //Sleeping Face
            originText = originText.replace(/😇/g, "k"); //Smiling Face with Halo
            originText = originText.replace(/😷/g, "j"); //Face with Medical Mask
            originText = originText.replace(/😉/g, "l"); //Winking Face
            originText = originText.replace(/😒/g, "m"); //Unamused Face
            originText = originText.replace(/😞/g, "n"); //Disappointed Face
            originText = originText.replace(/😙/g, "o"); //Kissing Face with Smiling Eyes
            originText = originText.replace(/🤒/g, "ó"); //Face with Thermometer
            originText = originText.replace(/🤕/g, "ò"); //Face with Head-Bandage
            originText = originText.replace(/🤢/g, "ỏ"); //Nauseated Face
            originText = originText.replace(/🤮/g, "õ"); //Face Vomiting
            originText = originText.replace(/🤧/g, "ọ"); //Sneezing Face
            originText = originText.replace(/🥵/g, "ô"); //Hot Face
            originText = originText.replace(/🥶/g, "ố"); //Cold Face
            originText = originText.replace(/🥴/g, "ồ"); //Woozy Face
            originText = originText.replace(/😵/g, "ổ"); //Dizzy Face
            originText = originText.replace(/🤯/g, "ỗ"); //Exploding Head
            originText = originText.replace(/🤠/g, "ộ"); //Cowboy Hat Face
            originText = originText.replace(/🥳/g, "ơ"); //Partying Face
            originText = originText.replace(/😎/g, "ớ"); //Smiling Face with Sunglasses
            originText = originText.replace(/🤓/g, "ờ"); //Nerd Face
            originText = originText.replace(/🧐/g, "ở"); //Face with Monocle
            originText = originText.replace(/🙁/g, "ỡ"); //Slightly Frowning Face
            originText = originText.replace(/😮/g, "ợ"); //Face with Open Mouth
            originText = originText.replace(/😟/g, "p"); //Worried Face
            originText = originText.replace(/😕/g, "q"); //Confused Face
            originText = originText.replace(/🙂/g, "r"); //Slightly Smiling Face
            originText = originText.replace(/🙃/g, "s"); //Upside-Down Face
            originText = originText.replace(/☹️/g, "t"); //Frowning Face
            originText = originText.replace(/😡/g, "u"); //Pouting Face
            originText = originText.replace(/😯/g, "ú"); //Hushed Face
            originText = originText.replace(/😲/g, "ù"); //Astonished Face
            originText = originText.replace(/🥺/g, "ủ"); //Pleading Face
            originText = originText.replace(/😦/g, "ũ"); //Frowning Face with Open Mouth
            originText = originText.replace(/😧/g, "ụ"); //Anguished Face
            originText = originText.replace(/😨/g, "ư"); //Fearful Face
            originText = originText.replace(/😰/g, "ứ"); //Anxious Face with Sweat
            originText = originText.replace(/😥/g, "ừ"); //Sad but Relieved Face
            originText = originText.replace(/😢/g, "ử"); //Crying Face
            originText = originText.replace(/😱/g, "ữ"); //Face Screaming in Fear
            originText = originText.replace(/😖/g, "ự"); //Confounded Face
            originText = originText.replace(/😍/g, "v"); //Smiling Face with Heart-Eyes
            originText = originText.replace(/😩/g, "x"); //Weary Face
            originText = originText.replace(/😭/g, "y"); //Loudly Crying Face
            originText = originText.replace(/😣/g, "ý"); //Persevering Face
            originText = originText.replace(/😓/g, "ỳ"); //Downcast Face with Sweat
            originText = originText.replace(/😫/g, "ỷ"); //Tired Face
            originText = originText.replace(/😤/g, "ỹ"); //Face with Steam From Nose
            originText = originText.replace(/😚/g, "ỵ"); //Kissing Face with Closed Eyes
            originText = originText.replace(/😳/g, "w"); //Flushed Face
            originText = originText.replace(/😠/g, "z"); //Angry Face
            originText = originText.replace(/\./g, ' '); // Replace dot with space
        };
        resultTextArea.val(originText);
    }

    copyBtn.addEventListener('click', function(event) {
        resultTextArea.select();
        try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
            console.log('Copying text command was ' + msg);
        } catch (err) {
            console.log('Oops, unable to copy');
        }
    });

    transBtn.addEventListener('click', function(event) {
        if (transType == 'icn2txt') {
            transType = 'txt2icn';
            document.getElementById('typeConvert').innerHTML = 'Nhập đoạn văn bản cần chuyển đổi: (Loại dịch: Tin nhắn ---> icon)';
        } else if (transType == 'txt2icn') {
            transType = 'icn2txt'
            document.getElementById('typeConvert').innerHTML = 'Nhập đoạn văn bản cần chuyển đổi: (Loại dịch: Icon ---> tin nhắn)';
        }
        doConversion();
    });
    originTextArea.bind('input propertychange', function() {
        doConversion();
    });
});