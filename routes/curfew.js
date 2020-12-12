const express = require('express');
const router = express.Router();

router.get('/:age/:doYouWorking', (req, res) => {
    let age = req.params.age;
    let doYouWorking = req.params.doYouWorking;
    let now = Date.now();
    console.log(now);
    if (isWeekend(now) == true) {

        if (isItBefor10AMClock(now) == true) {

            res.send(200, {
                message: "Evde Kal"
            });
        } else {

            if (isItBefor17PMClock(now) == true) {

                if (age >= 65 || age < 20) {

                    res.send(200, {
                        message: "Evde Kal"
                    });
                } else {

                    res.send(200,
                        {
                            message: "Maske Tak Çık"
                        });
                }

            } else {

                res.send(200, {
                    message: "Evde Kal"
                });
            }
        }
    } else {

        if (checkTheBan(now) == true) {

            if (age >= 65 || age < 20) {

                res.send(200, {
                    message: "Evde Kal"
                });

            } else {
                res.send(200, {
                    message: "Maske Tak Çık"
                });
            }
        } else {
            if (isItBefor5AMClock(now) == true) {

                res.send(200, {
                    message: "Evde Kal"
                });
            } else {

                res.send(200, {
                    message: "Maske Tak Çık"
                });
            }

        }
    }

});

/**
 * Check date if it is a weekend.
 * @param {*} date 
 */
function isWeekend(date) {

    const dt = new Date(date);
    if (dt.getDay() == 6 || dt.getDay() == 0) {
        return true;
    } else {
        return false;
    }
}

/**
 * Check the ban
 * @param {*} date 
 */
function checkTheBan(date) {

    const dt = new Date(date);
    const hour = dt.getHours();
    const result = hour > 5 && hour < 21;
    console.log(result);
    return result;
}
/**
 * check if it's befor 10:00 AM o'clock.
 * @param {*} date 
 */
function isItBefor10AMClock(date) {

    const dt = new Date(date);
    const hour = dt.getHours();
    const result = hour >= 10;
    return result;
}
/**
 * check if the time not 5 AM o'clock in morning.
 * @param {*} date 
 */
function isItBefor5AMClock(date) {

    const dt = new Date(date);
    const hour = dt.getHours();
    const result = hour < 5;
    return result;
}

/**
 * check if it's befor 17:00 PM o'clock.
 * @param {*} date 
 */
function isItBefor17PMClock(date) {

    const dt = new Date(date);
    const hour = dt.getHours();
    const result = hour <= 17;
    return result;
}
module.exports = router;
