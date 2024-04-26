const getSpecificValue = (year: number, category: string, type: string) => {
    // TODO
    if (category === 'إحصائيات ضد الاشخاص') {
        if (year === 2012) {
            if (type === 'عدد القضايا') {
                return 500;
            }
            if (type === 'عدد المتابعين') {
                return 200;
            }
        }
        if (year === 2013) {
            if (type === 'عدد القضايا') {
                return 800;
            }
            if (type === 'عدد المتابعين') {
                return 300;
            }
        }
        if (year === 2014) {
            if (type === 'عدد القضايا') {
                return 400;
            }
            if (type === 'عدد المتابعين') {
                return 590;
            }
        }
        if (year === 2015) {
            if (type === 'عدد القضايا') {
                return 490;
            }
            if (type === 'عدد المتابعين') {
                return 1000;
            }
        }
        if (year === 2016) {
            if (type === 'عدد القضايا') {
                return 10;
            }
            if (type === 'عدد المتابعين') {
                return 90;
            }
        }
        if (year === 2017) {
            if (type === 'عدد القضايا') {
                return 100;
            }
            if (type === 'عدد المتابعين') {
                return 300;
            }
        }
    }

    if (category === 'إحصائيات متعلقة بالأموال') {
        if (year === 2012) {
            if (type === 'عدد القضايا') {
                return 81532;
            }
            if (type === 'عدد المتابعين') {
                return 94472;
            }
        }
        if (year === 2013) {
            if (type === 'عدد القضايا') {
                return 86512;
            }
            if (type === 'عدد المتابعين') {
                return 96449;
            }
        }
        if (year === 2014) {
            if (type === 'عدد القضايا') {
                return 96089;
            }
            if (type === 'عدد المتابعين') {
                return 107296;
            }
        }
        if (year === 2015) {
            if (type === 'عدد القضايا') {
                return 95664;
            }
            if (type === 'عدد المتابعين') {
                return 107518;
            }
        }
        if (year === 2016) {
            if (type === 'عدد القضايا') {
                return 95375;
            }
            if (type === 'عدد المتابعين') {
                return 107960;
            }
        }
        if (year === 2017) {
            if (type === 'عدد القضايا') {
                return 94146;
            }
            if (type === 'عدد المتابعين') {
                return 104497;
            }
        }
    }

    if (category === 'إحصائيات متعلقة بنظام الأسرة و الأخلاق') {
        if (year === 2012) {
            if (type === 'عدد القضايا') {
                return 33768;
            }
            if (type === 'عدد المتابعين') {
                return 40590;
            }
        }
        if (year === 2013) {
            if (type === 'عدد القضايا') {
                return 36565;
            }
            if (type === 'عدد المتابعين') {
                return 43206;
            }
        }
        if (year === 2014) {
            if (type === 'عدد القضايا') {
                return 40980;
            }
            if (type === 'عدد المتابعين') {
                return 48984;
            }
        }
        if (year === 2015) {
            if (type === 'عدد القضايا') {
                return 33641;
            }
            if (type === 'عدد المتابعين') {
                return 39906;
            }
        }
        if (year === 2016) {
            if (type === 'عدد القضايا') {
                return 32510;
            }
            if (type === 'عدد المتابعين') {
                return 39038;
            }
        }
        if (year === 2017) {
            if (type === 'عدد القضايا') {
                return 34944;
            }
            if (type === 'عدد المتابعين') {
                return 40760;
            }
        }
    }

    if (category === 'إحصائيات متعلقة بالأمن و النظام العام') {
        if (year === 2012) {
            if (type === 'عدد القضايا') {
                return 20231;
            }
            if (type === 'عدد المتابعين') {
                return 23526;
            }
        }
        if (year === 2013) {
            if (type === 'عدد القضايا') {
                return 22006;
            }
            if (type === 'عدد المتابعين') {
                return 25198;
            }
        }
        if (year === 2014) {
            if (type === 'عدد القضايا') {
                return 25725;
            }
            if (type === 'عدد المتابعين') {
                return 28973;
            }
        }
        if (year === 2015) {
            if (type === 'عدد القضايا') {
                return 26543;
            }
            if (type === 'عدد المتابعين') {
                return 29273;
            }
        }
        if (year === 2016) {
            if (type === 'عدد القضايا') {
                return 29828;
            }
            if (type === 'عدد المتابعين') {
                return 33923;
            }
        }
        if (year === 2017) {
            if (type === 'عدد القضايا') {
                return 23568;
            }
            if (type === 'عدد المتابعين') {
                return 27923;
            }
        }
    }

    if (category === 'إحصائيات متعلقة بالتزوير و التزييف و الاتصال') {
        if (year === 2012) {
            if (type === 'عدد القضايا') {
                return 5156;
            }
            if (type === 'عدد المتابعين') {
                return 6875;
            }
        }
        if (year === 2013) {
            if (type === 'عدد القضايا') {
                return 6573;
            }
            if (type === 'عدد المتابعين') {
                return 9641;
            }
        }
        if (year === 2014) {
            if (type === 'عدد القضايا') {
                return 7872;
            }
            if (type === 'عدد المتابعين') {
                return 10351;
            }
        }
        if (year === 2015) {
            if (type === 'عدد القضايا') {
                return 6707;
            }
            if (type === 'عدد المتابعين') {
                return 11978;
            }
        }
        if (year === 2016) {
            if (type === 'عدد القضايا') {
                return 7451;
            }
            if (type === 'عدد المتابعين') {
                return 9709;
            }
        }
        if (year === 2017) {
            if (type === 'عدد القضايا') {
                return 6999;
            }
            if (type === 'عدد المتابعين') {
                return 12225;
            }
        }
    }

    if (category === 'إحصائيات متعلقة بقوانين خاصة') {
        if (year === 2012) {
            if (type === 'عدد القضايا') {
                return 149327;
            }
            if (type === 'عدد المتابعين') {
                return 178347;
            }
        }
        if (year === 2013) {
            if (type === 'عدد القضايا') {
                return 172529;
            }
            if (type === 'عدد المتابعين') {
                return 196782;
            }
        }
        if (year === 2014) {
            if (type === 'عدد القضايا') {
                return 166897;
            }
            if (type === 'عدد المتابعين') {
                return 189422;
            }
        }
        if (year === 2015) {
            if (type === 'عدد القضايا') {
                return 158077;
            }
            if (type === 'عدد المتابعين') {
                return 181967;
            }
        }
        if (year === 2016) {
            if (type === 'عدد القضايا') {
                return 161995;
            }
            if (type === 'عدد المتابعين') {
                return 190937;
            }
        }
        if (year === 2017) {
            if (type === 'عدد القضايا') {
                return 188451;
            }
            if (type === 'عدد المتابعين') {
                return 213336;
            }
        }
    }

    if (category === 'إحصائيات متعلقة بالمخدرات') {
        if (year === 2012) {
            if (type === 'عدد القضايا') {
                return 37958;
            }
            if (type === 'عدد المتابعين') {
                return 47573;
            }
        }
        if (year === 2013) {
            if (type === 'عدد القضايا') {
                return 49365;
            }
            if (type === 'عدد المتابعين') {
                return 61166;
            }
        }
        if (year === 2014) {
            if (type === 'عدد القضايا') {
                return 67303;
            }
            if (type === 'عدد المتابعين') {
                return 80213;
            }
        }
        if (year === 2015) {
            if (type === 'عدد القضايا') {
                return 63802;
            }
            if (type === 'عدد المتابعين') {
                return 77254;
            }
        }
        if (year === 2016) {
            if (type === 'عدد القضايا') {
                return 69965;
            }
            if (type === 'عدد المتابعين') {
                return 88179;
            }
        }
        if (year === 2017) {
            if (type === 'عدد القضايا') {
                return 85769;
            }
            if (type === 'عدد المتابعين') {
                return 107787;
            }
        }
    }
    // Default to 0 if no specific value is set
    return 0;
};

export default getSpecificValue