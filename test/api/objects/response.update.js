export const dataUpdate = {
    "title": "Root Schema",
    "required": [
        "name",
        "job",
        "updatedAt"
    ],
    "properties": {
        "name": {
            "type": "string",
            "default": "",
            "title": "The name Schema",
            "examples": [
                "morpheus"
            ]
        },
        "job": {
            "type": "string",
            "default": "",
            "title": "The job Schema",
            "examples": [
                "zion resident"
            ]
        },
        "updatedAt": {
            "type": "string",
            "default": "",
            "title": "The updatedAt Schema",
            "examples": [
                "2022-06-19T01:08:14.385Z"
            ]
        }
    },
};