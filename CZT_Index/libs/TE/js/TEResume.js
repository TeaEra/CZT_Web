(function () {
    "use strict";

    // some codes here;

    window.czt = window.czt || {};

    window.czt.resume = {
        // Basic information
        "info": {
            "name-en" : "Vince CHEN",
            "name-zh": "CHEN Zhengtong",
            "gender" : "male",
            "birthday" : "1988/5/29",
            "email" : {
                "gmail" : "cllf08214@gmail.com",
                "qq" : "cllf08214@qq.com"
            },
            "mobile" : {
                "mainland" : "(+86) 14714319686",
                "hk" : "(+852) 67468785"
            }
        },
        // Education
        "education" : {
            "master" : {
                "university" : "Hong Kong Polytechnic University",
                "school" : "Electronic Information Engineering",
                "GPA" : "3.25",
                "date-start" : "2010.9",
                "date-end" : "2012.1"
            },
            "bachelor" : {
                "university" : "Tianjin University",
                "school" : "Software Engineering",
                "GPA" : "3.22",
                "date-start" : "2006.9",
                "date-end" : "2010.7"
            }
        },
        // Work Experience
        "work" : [
            {
                "company" : "ecVision",
                "date-start" : "2013.11",
                "date-end" : "2014.5"
            },
            {
                "company" : "Lab OpenCog, Hong Kong Polytechnic University",
                "date-start" : "2013.3",
                "date-end" : "2013.9"
            },
            {
                "company" : "Biomind LLC, Practical Visionaries",
                "date-start" : "2012.3",
                "date-end" : "2013.3"
            }
        ],
        // Interest
        "interest" : ["Basketball", "American pool", "Hiking"]
    };

    window.czt.skillProfile = {
        "programming-language" : {
            "cplusplus" : {
                "proficiency" : 60
            },
            "c" : {
                "proficiency" : 60
            },
            "java" : {
                "proficiency" : 60
            },
            "csharp" : {
                "proficiency" : 60
            },
            "php" : {
                "proficiency" : 60
            },
            "python" : {
                "proficiency" : 60
            },
            "javascript" : {
                "proficiency" : 60
            },
            "html" : {
                "proficiency" : 60
            },
            "css" : {
                "proficiency" : 60
            }
        },
        "operating-system" : {
            "fedora" : {
                "proficiency" : 60
            },
            "ubuntu" : {
                "proficiency" : 60
            },
            "osx" : {
                "proficiency" : 60
            }
        }
    };

    window.czt.settings = {
        "icon" : {
            "work" : "glyphicon-folder-open",
            "education" : "glyphicon-book",
            "certificate" : "glyphicon-certificate",
            "comment" : "glyphicon-comment",
            "paperclip" : "glyphicon-paperclip"
        },
        "contextual" : {
            "paperclip" : "active",
            "certificate" : "success",
            "education" : "info",
            "comment" : "warning",
            "work" : "danger"
        }
    };

    window.czt.timeLine = {
        "2014" : {
            "5" : [
                {
                    "type" : "work",
                    "title" : "ecVision"
                }
            ]
        },
        "2013" : {
            "11" : [
                {
                    "type" : "work",
                    "title" : "ecVision"
                }
            ],
            "9" : [
                {
                    "type" : "work",
                    "title" : "Lab OpenCog"
                }
            ],
            "3" : [
                {
                    "type" : "work",
                    "title" : "Lab OpenCog"
                },
                {
                    "type" : "work",
                    "title" : "Biomind LLC"
                }
            ]
        },
        "2012" : {
            "12" : [
                {
                    "type" : "work",
                    "title" : "test"
                }
            ],
            "3" : [
                {
                    "type" : "work",
                    "title" : "Biomind LLC"
                }
            ],
            "1" : [
                {
                    "type" : "education",
                    "title" : "Hong Kong Polytechnic University"
                }
            ]
        },
        "2010" : {
            "9" : [
                {
                    "type" : "education",
                    "title" : "Hong Kong Polytechnic University"
                }
            ],
            "7" : [
                {
                    "type" : "education",
                    "title" : "Tianjin University"
                }
            ]
        },
        "2006" : {
            "9" : [
                {
                    "type" : "education",
                    "title" : "Tianjin University"
                }
            ]
        }
    };
})();