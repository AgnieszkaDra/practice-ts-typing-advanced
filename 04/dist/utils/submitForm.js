import validateForm from "./validateForm.js";
export const submitForm = (form, inputs, type) => {
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const formData = {};
        inputs.forEach((element) => {
            const input = form.querySelector(`[name=${element.name}]`);
            if (input instanceof HTMLInputElement || input instanceof HTMLSelectElement) {
                formData[element.name] = input.value;
            }
        });
        async function request(url, options) {
            const resp = await fetch(url, options);
            if (!resp.ok)
                throw new Error(`Error: ${resp.status}`);
            return await resp.json();
        }
        const url = 'http://localhost:5000/users';
        if (type === 'register') {
            try {
                const body = formData;
                const data = await request(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(body),
                });
                console.log('User registered:', data);
            }
            catch (err) {
                if (err instanceof Error) {
                    console.error('Registration Error:', err.message);
                }
                else {
                    console.error(err);
                }
            }
        }
        if (type === 'login') {
            try {
                const users = await request(url);
                const user = users.find((u) => u.email === formData.email && u.password === formData.password);
                if (user) {
                    console.log('User logged in:', user);
                }
                else {
                    console.error('Invalid email or password.');
                }
            }
            catch (error) {
                console.error('Error:', error);
            }
        }
        validateForm(inputs, formData, form);
    });
};
