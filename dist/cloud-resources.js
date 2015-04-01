if (window.ag == null) {
  window.ag = {};
}
window.ag.data = {
  "options": {
    "baseUrl": "https://rest-api.appgyver.com/v2/",
    "headers": {
      "steroidsApiKey": "95d90892fb82ed6f749ed80cda6cf2a20f8bec45e504ce66ea2713f05ab33c94",
      "steroidsAppId": 53994
    }
  },
  "resources": {
    "superhero": {
      "schema": {
        "fields": {
          "alter_ego": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "publisher": {
            "type": "string"
          },
          "id": {
            "type": "string",
            "identity": true
          }
        },
        "identifier": "id"
      }
    }
  }
};