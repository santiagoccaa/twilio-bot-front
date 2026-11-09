// 1. Cambiar el tipo de 'body' a 'any' o un tipo genérico (Record<string, any>)
const request = async <T>(url: string, body: any) => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

    const settings: RequestInit = {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      // Ahora stringify recibe un objeto válido
      body: body ? JSON.stringify(body) : undefined,
    };

    const res = await fetch(`${baseUrl}${url}`, settings);
    const json = (await res.json()) as T;
    return json;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const apiService = {
  // 2. Cambiar el tipo de 'body' aquí también
  post: <T>(url: string, body: any) => request<T>(url, body),
};
