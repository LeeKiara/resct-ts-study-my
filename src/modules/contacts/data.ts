import axios from "axios";
import useSWR from "swr";

const contactsApi = axios.create({
  baseURL: "http://localhost:9090",
});

interface ContactData {
  id?: number; // id값은 나중에 생성
  name: string;
  phone: string;
}

const INIT_DATA: ContactData[] = [];
const CONTACTS_DATA_KEY = "/contacts";

const contactsFetcher = async ([key, page]) => {
  try {
    const response = await contactsApi.get<ContactData[]>(
      `${key}?_sort=id&_order=desc`,
    );

    return response.data;
  } catch (e: any) {
    return INIT_DATA;
  }
};

export const useContactsData = (page: number) => {
  const {
    data: contactsData,
    mutate,
    isValidating: isContactDataValidating,
  } = useSWR<ContactData[]>([CONTACTS_DATA_KEY, page], contactsFetcher, {
    fallbackData: INIT_DATA,
    revalidateOnFocus: true,
  });

  function createContactData(contacts: ContactData[]) {
    // Mutate the data to handle create or update based on ID
    mutate((prevData: ContactData[] = [...INIT_DATA]) => {
      let nextData = [...prevData];
      for (const contact of contacts) {
        const existingContactIndex = nextData.findIndex(
          (c) => c.id === contact.id,
        );
        if (existingContactIndex !== -1) {
          // Update existing contact
          nextData[existingContactIndex] = contact;
        } else {
          // Create a new contact
          nextData.unshift(contact);
        }
      }
      return nextData;
    });

    // Perform API updates if needed (create/update on the server)
    contacts.forEach(async (contact) => {
      try {
        if (contact.id) {
          // If ID exists, it's an update
          await contactsApi.put(`${CONTACTS_DATA_KEY}/${contact.id}`, contact);
        } else {
          // If ID is missing, it's a new contact
          const response = await contactsApi.post(CONTACTS_DATA_KEY, contact);
          if (response.status === 201) {
            // Update the contact's ID with the one from the server
            contact.id = response.data.id;
          }
        }
      } catch (e: any) {
        console.error(e);
      }
    });
  }

  return {
    contactsData,
    createContactData,
    isContactDataValidating,
  };
};
