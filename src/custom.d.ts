 //类型声明
type RecordItem={
  tags: Tag[];
  notes: string;
  types: string;
  totalNumber: number;
  date: Date;
}

type Tag ={
  id: string;
  name: string;
}

type TagListModel ={
  data: Tag[];
  fetch: () => Tag[];
  create: (name: string) => 'success' | 'duplicated' | 'null';
  update: (id: string, name: string) => 'success' | 'duplicated' | 'not found';
  remove: (id: string) => boolean;
  save: () => void;
}
interface Window {
  tagList: Tag[];
  recordList: [];

}