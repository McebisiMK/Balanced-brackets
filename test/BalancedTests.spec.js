describe("Balanced Brackets",function(){
    describe("Given a string with balanced brackets",function(){
        [{input: "", output: "OK"},
        {input: "[]", output: "OK"},
        {input: "[[]]", output: "OK"},
        {input: "[[[][]]]", output: "OK"}
        ]
        .forEach(function(element){
            it("Should return OK",function(){
                //----------------Arrange------------
                let balancedBrackets = new BalancedBrackets();
    
                //----------------Act----------------
                let actual = balancedBrackets.Balanced(element.input);
    
                //----------------Assert-------------
                let expected = element.output;
                expect(actual).toBe(expected);
            })
        })
    })

    describe("Given a string with inbalanced brackets",function(){
        [{input: "][", output: "FAIL"},
        {input: "][][", output: "FAIL"},
        {input: "[][]][ ", output: "FAIL"},
        {input: "[[[][]]]]", output: "FAIL"}
        ]
        .forEach(function(element){
            it("Should return FAIL",function(){
                //----------------Arrange------------
                let balancedBrackets = new BalancedBrackets();
    
                //----------------Act----------------
                let actual = balancedBrackets.Balanced(element.input);
    
                //----------------Assert-------------
                let expected = element.output;
                expect(actual).toBe(expected);
            })
        })
    })
})