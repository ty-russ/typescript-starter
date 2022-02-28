"use strict";
//ENUMS
// allows us store keywords and constants and associate them with numeric values
var Record_status;
(function (Record_status) {
    Record_status[Record_status["ACTIVE"] = 0] = "ACTIVE";
    Record_status[Record_status["CREATED_PENDING"] = 1] = "CREATED_PENDING";
    Record_status[Record_status["EDITED_PENDING"] = 2] = "EDITED_PENDING";
    Record_status[Record_status["SOFT_DELETED"] = 3] = "SOFT_DELETED";
    Record_status[Record_status["DELETED"] = 4] = "DELETED";
})(Record_status || (Record_status = {}));
const docfour = {
    uid: 34,
    record_status_code: Record_status.ACTIVE,
    data: {
        name: "docOne",
        type: "pdf",
    },
};
console.log(docfour);
