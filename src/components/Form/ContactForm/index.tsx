import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { changeEmailContactValue, changeMessageValue, changeSubjectValue } from "../../../store/reducers/contact";

export default function ContactForm() {

  const dispatch=useAppDispatch();
  const { email, subject, message} = useAppSelector((state) => state.contact.credentials)

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <p className=" font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Vous avez un problème technique ? 
          Vous souhaitez envoyer des commentaires sur une fonctionnalité bêta ?
          Besoin de détails sur notre plan Business ? 
        </p>
        <p className="mb-8 lg:mb-16 font-bold text-center text-gray-500 dark:text-gray-400 sm:text-xl" >
          Faites le nous savoir.
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              E-mail
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e)=> dispatch(changeEmailContactValue(e.target.value))}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="nom@mail.fr"
              required={true}
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Sujet
            </label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e)=> dispatch(changeSubjectValue(e.target.value))}
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Comment pouvons-nous vous aider ?"
              required={true}
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e)=> dispatch(changeMessageValue(e.target.value))}
              rows={6}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Ecrivez-votre message"
            />
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary 
                      sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 
                      dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
}
