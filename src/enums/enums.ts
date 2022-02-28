//ENUMS
// allows us store keywords and constants and associate them with numeric values

enum Record_status {
  ACTIVE,
  CREATED_PENDING,
  EDITED_PENDING,
  SOFT_DELETED,
  DELETED,
}

interface Record_details {
  uid: number;
  record_status_code: Record_status;
  data: object;
}

const docfour: Record_details = {
  uid: 34,
  record_status_code: Record_status.ACTIVE,
  data: {
    name: "docOne",
    type: "pdf",
  },
};

console.log(docfour);
