export interface User {
    email: string;
    password: string;
    name: string;
    phone: string;
    city: string;
    zip: string;
    noEmails: boolean;
    notifyExpiry: boolean;
    receiveUpdates: boolean;
  }