import db from '../../firebase';

export const getArticle = (id) => {
  db.ref(`/Stories/${id}`).on("value", res => {
   return res.val();
   })
}

