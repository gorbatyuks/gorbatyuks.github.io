/**
 * Created by ���� on 20.10.2015.
 */
var tasksCompleted = {
    'Anna': 29,
    'Serg': 35,
    'Elena': 1,
    'Anton': 99
};

    var max = 0;
    var maxName = "";
    for (var name in tasksCompleted) {
        if (max < tasksCompleted[name]) {
            max = tasksCompleted[name];
            maxName = name;
        }
    }
    console.log(maxName + ': ' + tasksCompleted[name]);

