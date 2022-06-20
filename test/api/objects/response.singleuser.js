export const singleUserResponse = {
    "title": "Root Schema",
    "type": "object",
    "default": {},
    "required": [
        "data",
        "support"
    ],
    "additionalProperties": false,
    "properties": {
        "data": {
            "title": "The data Schema",
            "type": "object",
            "default": {},
            "required": [
                "id",
                "email",
                "first_name",
                "last_name",
                "avatar"
            ],
            "additionalProperties": false,
            "properties": {
                "id": {
                    "title": "The id Schema",
                    "type": "integer",
                    "default": 0
                },
                "email": {
                    "title": "The email Schema",
                    "type": "string",
                    "default": ""
                },
                "first_name": {
                    "title": "The first_name Schema",
                    "type": "string",
                    "default": ""
                },
                "last_name": {
                    "title": "The last_name Schema",
                    "type": "string",
                    "default": ""
                },
                "avatar": {
                    "title": "The avatar Schema",
                    "type": "string",
                    "default": ""
                }
            }
        },
        "support": {
            "title": "The support Schema",
            "type": "object",
            "default": {},
            "required": [
                "url",
                "text"
            ],
            "additionalProperties": false,
            "properties": {
                "url": {
                    "title": "The url Schema",
                    "type": "string",
                    "default": ""
                },
                "text": {
                    "title": "The text Schema",
                    "type": "string",
                    "default": ""
                }
            }
        }
    }
};

export const registerResponse = {
    "default": {},
    "required": [
        "id",
        "token"
    ],
    "additionalProperties": false,
    "properties": {
        "id": {
            "default": 0
        },
        "token": {
            "default": ""
        }
    }
};