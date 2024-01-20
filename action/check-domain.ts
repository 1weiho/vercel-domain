'use server';

export const checkDomainExist = async (appName: string) => {
  try {
    const res = await fetch(`https://${appName}.vercel.app`, {
      method: 'GET',
      mode: 'no-cors',
    });

    if (res.ok || res.status < 400) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error(error);
    throw new Error('Error checking domain');
  }
};
