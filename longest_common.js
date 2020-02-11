var data_s = "zxabcdez"
var data_t = "yzabcdezx"
var count = 0
function longestCommonSubstring(s, t, c) {
    for (var i = 0; i < s.length; i++){
        for (var j = 0; j < t.length; j++){
            if (s[i] == t[j]){
                c = c + 1
            }
            i++
        }
    }
    return (c)
}
let longestCommon = longestCommonSubstring(data_s,data_t,count)
console.log(longestCommon)