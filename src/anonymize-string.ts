class AnonymizeString {
	
    private hashStringToNumber(inputString: string): number {
        let hash = 0;
        for (let i = 0; i < inputString.length; i++) {
            const char = inputString.charCodeAt(i);
            hash = (hash << 5) - hash + char;
            hash |= 0; // Перетворення на 32-бітове число
        }
        return Math.abs(hash);
    }

    private seededRandom(seed: number): number {
        const x = Math.sin(seed) * 10000;
        return x - Math.floor(x);
    }

    public anonymizeString(inputString: string) {
        const seed = this.hashStringToNumber(inputString);

        const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let anonymizedString = '';

        for (let i = 0; i < 8; i++) {
            const randomIndex = Math.floor(this.seededRandom(seed + i) * alphabet.length);
            anonymizedString += alphabet[randomIndex];
        }

        return anonymizedString;
    }

}

export const anonymize = new AnonymizeString();