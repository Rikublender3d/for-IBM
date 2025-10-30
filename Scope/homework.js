{
    let homeworkLet = "homeworkLet";
    const homeworkConst = "homeworkConst";
    var homeworkVar = "homeworkVar";

    homeworkVar = "helloworldVar";       // ✅ OK（varは再代入可能）
    homeworkConst = "helloworldConst";   // ❌ エラー（constは再代入不可）
    homeworkLet = "helloworldLet";       // ✅ OK（letは再代入可能）
}

homeworkVar = "helloworldVar";           // ✅ OK（varは関数スコープなので外でも見える）
homeworkConst = "helloworldConst";       // ❌ エラー（constはブロックスコープで外から見えない）
homeworkLet = "helloworldLet";           // ❌ エラー（letもブロックスコープで外から見えない）
