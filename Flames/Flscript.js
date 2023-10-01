
    function calculateFLAMES() {
        let a = document.getElementById("your").value.trim().toUpperCase();
        let b = document.getElementById("partner").value.trim().toUpperCase();

        let count = 0;

        for (let i = 0; i < a.length; i++) {
            for (let j = 0; j < b.length; j++) {
                if (a[i] === b[j]) {
                    count += 2;
                    b = b.substring(0, j) + '0' + b.substring(j + 1);
                    break;
                }
            }
        }

        count = (a.length + b.length) - count;

        let flames = "FLAMES";
        let ind;
        let count1 = 6;

        while (count1 !== 1) {
            let count2 = count % count1;

            if (count2 === 0) {
                count2 = count1;
            }

            for (let i = 0; i < count1; i++) {
                if ((count2 - 1) === i) {
                    let temp = flames.substring(0, i);
                    flames = flames.substring(i + 1);
                    flames += temp;
                    count1--;

                    for (let j = 0; j < i; j++) {
                        let tempChar = flames[0];
                        flames = flames.substring(1);
                        flames += tempChar;
                    }

                    break;
                }
            }
        }

        let result = "";
        switch (flames[0]) {
            case 'F':
                result ="Friend 🫂🫂";
                break;
            case 'L':
                result = "Love ❤️😘";
                break;
            case 'A':
                result = "Affection 😊😊";
                break;
            case 'M':
                result = "Marriage💏💏";
                break;
            case 'E':
                result = "Enemy 😏😏";
                break;
            case 'S':
                result =  "Sister 👧👧";
                break;
        }

        document.getElementById("result").innerHTML = ` ${result}`;
    }


