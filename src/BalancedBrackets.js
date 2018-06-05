function BalancedBrackets() {
    Balanced = function (input) {
        let firstCharacter = input.charAt(0);
        let lastCharacter = input.charAt(input.length - 1);
        let brackets = 0;
        if (firstCharacter == "[" && lastCharacter == "]") {
            for (let index = 0; index < input.length; index++) {
                if (input.charAt(index) == "[") {
                    brackets += 1;
                }
                else {
                    brackets -= 1;
                }
            }
            if(brackets == 0){
                return "OK"
            }
        }
        else if(input == ""){
            return "OK"
        }
        return "FAIL"
    }

    return {
        Balanced
    }
}