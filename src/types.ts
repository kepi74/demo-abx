export interface IPersonData {
  email: string;
  name?: string;
  surname: string;
}

export interface IPerson extends IPersonData {
  id: string;
}
