export const listUserResponse = {
    "default": {},
    "required": [
        "page",
        "per_page",
        "total",
        "total_pages",
        "data",
        "support"
    ],
    "additionalProperties": false,
    "properties": {
        "page": {
            "default": 0
        },
        "per_page": {
            "default": 0
        },
        "total": {
            "default": 0
        },
        "total_pages": {
            "default": 0
        },
        "data": {
            "default": [],
            "additionalItems": false,
            "items": {
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
                        "default": 0
                    },
                    "email": {
                        "default": ""
                    },
                    "first_name": {
                        "default": ""
                    },
                    "last_name": {
                        "default": ""
                    },
                    "avatar": {
                        "default": ""
                    }
                }
            }
        },
        "support": {
            "default": {},
            "required": [
                "url",
                "text"
            ],
            "additionalProperties": false,
            "properties": {
                "url": {
                    "default": ""
                },
                "text": {
                    "default": ""
                }
            }
        }
    }
};