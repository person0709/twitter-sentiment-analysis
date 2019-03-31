const language = require('@google-cloud/language');

class Language {
    constructor(){
        this.analyser = new language.LanguageServiceClient({
            projectId: process.env.PROJECT_ID,
            keyFilename: process.env.KEYFILE_NAME
        });
    }
    async getSentiment(document) {
        try {
            const result = await this.analyser.analyzeSentiment({
                document
            });
            return {
                ...document,
                "score": (result[0].documentSentiment.score).toFixed(2),
                "magnitude": (result[0].documentSentiment.magnitude).toFixed(2)
            };
        } catch (error) {
            console.log(error);
        }
    }
    
    async getEntitySentiment(document) {
        try {
            const result = await this.analyser.analyzeEntitySentiment({
                document
            });
            const entityList =  result[0].entities;
            for (let i = 0; i < entityList.length; i++) {
                const entity = entityList[i];
                if (document.keyword.toLowerCase().includes(entity.name.toLowerCase())) {
                    // salience score varies from 0 to 1
                    if (entity.salience > 0.5){
                        return {
                            ...document,
                            "score": entity.sentiment.score,
                            "magnitude": entity.sentiment.magnitude
                        };
                    }
                }
            }
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = Language;