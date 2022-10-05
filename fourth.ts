export class Service {
    private readonly OWNER = 'Master of disaster';

    constructor(private readonly apiUrl: string) {}

    public async fetchData() {
      try {
        const apiData = await axios.get(this.apiUrl);

        const data = {
          ...apiData,
          owner: this.OWNER,
        };

        const parsedData = await this.parseData(data);
        await this.saveData(parsedData);
      } catch (err) {
        console.log(err);
      }
    }

    private async parseData(data) {
      return data;
    }

    private async saveData(data) {
      console.log('Data has been stored!');
    }
}

