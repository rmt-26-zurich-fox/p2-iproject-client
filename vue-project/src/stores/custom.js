import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";

export const useCustomStore = defineStore({
    id: "custom",
    state: () => ({
        baseURL: "http://localhost:3000",
        // baseURL: "https://baking-fortress-server.herokuapp.com",

        // Vue State Storage
        email: "",
        role: "",
        access_token: "",
        user_id: "",
        profile_id: "",
        profile_first_name: "",
        edit_status: "",

        // Profile Detail Space
        profile: {},

        // Register Handler
        registerObj: {
            email: "",
            password: ""
        },

        // Login Handler
        loginObj: {
            email: "",
            password: ""
        },

        // Products Space
        totalItems: 0,
        products: [],
        totalPages: 0,
        currentPage: 0,

        // Product Detail Space
        product: {},

        // Cart Space
        carts: [],

        // Order List Space
        orders: [],

        // Midtrans Token
        midtransToken: "",

        // Admin Home Product Space
        adminProducts: [],

        // Admin Order List Customer Space
        adminOrderListCustomer: [],

        // Admin Product Detail Space
        adminProductDetail: {},
    }),

    actions: {
        async registerSubmitHandler(obj) {
            try {
                this.registerObj = obj;
                await axios({
                    method: "POST",
                    url: this.baseURL + "/register/customer",
                    data: {
                        email: this.registerObj.email,
                        password: this.registerObj.password
                    }
                })

                this.router.push("/login");
                Swal.fire("Success", "Success Register User", "success");
            } catch (error) {
                // console.log(error);
                Swal.fire(
                    error.response.data.message,
                    error.response.data.error.join(", "),
                    "error"
                );
            }
        },

        async loginSubmitHandler(obj) {
            try {
                this.loginObj = obj;
                const { data } = await axios({
                    method: "POST",
                    url: this.baseURL + "/login/login",
                    data: {
                        email: this.loginObj.email,
                        password: this.loginObj.password
                    }
                });

                Swal.fire("Success", "Success Login", "success");
                localStorage.setItem("access_token", data.access_token);
                localStorage.setItem("email", data.email);
                localStorage.setItem("role", data.role);
                localStorage.setItem("user_id", data.user_id);
                localStorage.setItem("profile_id", data.profile_id);
                localStorage.setItem("profile_first_name", data.profile_first_name);
                localStorage.setItem("edit_status", data.edit_status);
                this.access_token = data.access_token;
                this.email = data.email;
                this.role = data.role;
                this.user_id = data.user_id;
                this.profile_id = data.profile_id;
                this.profile_first_name = data.profile_first_name;
                this.edit_status = data.edit_status;
                if (localStorage.role === "Customer") {
                    this.router.push("/");
                } else {
                    this.router.push("/admin");
                }
                if (this.edit_status === "No") {
                    Swal.fire("Welcome", "Please insert your profile", "info");
                }
            } catch (error) {
                // console.log(error);
                Swal.fire(
                    error.response.data.message,
                    error.response.data.error,
                    "error"
                );
            }
        },

        async loginGuestSubmitHandler() {
            try {
                console.log("Masuk");
                const { data } = await axios({
                    method: "POST",
                    url: this.baseURL + "/login/login",
                    data: {
                        email: "guest@guest.com",
                        password: "123123"
                    }
                });

                Swal.fire("Success", "Success Login as Guest", "success");
                localStorage.setItem("access_token", data.access_token);
                localStorage.setItem("email", data.email);
                localStorage.setItem("role", data.role);
                localStorage.setItem("user_id", data.user_id);
                localStorage.setItem("profile_id", data.profile_id);
                localStorage.setItem("profile_first_name", data.profile_first_name);
                localStorage.setItem("edit_status", data.edit_status);
                this.access_token = data.access_token;
                this.email = data.email;
                this.role = data.role;
                this.user_id = data.user_id;
                this.profile_id = data.profile_id;
                this.profile_first_name = data.profile_first_name;
                this.edit_status = data.edit_status;
                this.router.push("/");
            } catch (error) {
                // console.log(error);
                Swal.fire(
                    error.response.data.message,
                    error.response.data.error,
                    "error"
                );
            }
        },

        // Method Google Login
        async handleCredentialResponseGoogle(response) {
            try {
                //console.log("Encoded JWT ID token: " + response.credential);

                const { data } = await axios({
                    method: "POST",
                    url: this.baseURL + "/login/login-google",
                    headers: {
                        token_google: response.credential,
                    },
                });

                localStorage.setItem("access_token", data.access_token);
                localStorage.setItem("email", data.email);
                localStorage.setItem("role", data.role);
                localStorage.setItem("user_id", data.user_id);
                localStorage.setItem("profile_id", data.profile_id);
                localStorage.setItem("profile_first_name", data.profile_first_name);
                localStorage.setItem("edit_status", data.edit_status);
                this.access_token = data.access_token;
                this.email = data.email;
                this.role = data.role;
                this.user_id = data.user_id;
                this.profile_id = data.profile_id;
                this.profile_first_name = data.profile_first_name;
                this.edit_status = data.edit_status;
                this.router.push("/");
                if (this.edit_status === "No") {
                    Swal.fire("Welcome", "Please insert your profile", "info");
                }
            } catch (error) {
                // console.log(error);
                swal(error.response.data.message, error.response.data.error, "error");
            }
        },

        async fetchProducts(name = "", min = 0, max = 99_999_999, page = 0, size = 6) {
            try {
                const { data } = await axios({
                    method: "GET",
                    url: this.baseURL + `/customers/products/list-active-pagination?page=${page}&size=${size}&name=${name}&min=${min}&max=${max}`,
                    headers: {
                        access_token: localStorage.access_token
                    }
                });

                this.totalItems = data.data.totalItems;
                this.products = data.data.products;
                this.totalPages = data.data.totalPages;
                this.currentPage = data.data.currentPage;
            } catch (error) {
                // console.log(error);
                if (error.response.data.message === "Internal Server Error") {
                    Swal.fire(
                        "Error",
                        "Internal Server Error",
                        "error"
                    );
                }
            }
        },

        async fetchProfileDetail(callback) {
            try {
                const { data } = await axios({
                    method: "GET",
                    url: this.baseURL + "/profiles/current",
                    headers: {
                        access_token: localStorage.access_token
                    }
                });

                this.profile = data.data;
                callback(this.profile);
            } catch (error) {
                console.log(error);
            }
        },

        async editProfileDetail(firstName, lastName, address, phoneNumber) {
            try {
                await axios({
                    method: "PUT",
                    url: this.baseURL + "/profiles/edit",
                    headers: {
                        access_token: localStorage.access_token
                    },
                    data: {
                        firstName,
                        lastName,
                        address,
                        phoneNumber
                    }
                });

                this.router.push("/");
            } catch (error) {
                console.log(error);
            }
        },

        async fetchProductDetail(productId) {
            try {
                const { data } = await axios({
                    method: "GET",
                    url: this.baseURL + `/customers/products/detail/${productId}`,
                    headers: {
                        access_token: localStorage.access_token
                    }
                });

                this.product = data.data;
                this.router.push(`/product-detail/${productId}`);
            } catch (error) {
                // console.log(error);
                if (error.response.data.message === "Data not found") {
                    this.router.push("/");
                    Swal.fire(
                        error.response.data.message,
                        error.response.data.error,
                        "error"
                    );
                }
            }
        },

        async addProductToCart(productId, stock) {
            try {
                await axios({
                    method: "POST",
                    url: this.baseURL + `/customers/orders/add/${productId}`,
                    headers: {
                        access_token: localStorage.access_token
                    },
                    data: {
                        stock
                    }
                });

                this.router.push("/cart");
            } catch (error) {
                console.log(error);
            }
        },

        async fetchProductCart() {
            try {
                const { data } = await axios({
                    method: "GET",
                    url: this.baseURL + `/customers/orders/cart`,
                    headers: {
                        access_token: localStorage.access_token
                    }
                });

                this.carts = data.data;
            } catch (error) {
                console.log(error);
            }
        },

        async cancelProductFromCart(orderId) {
            try {
                await axios({
                    method: "DELETE",
                    url: this.baseURL + `/customers/orders/delete/${orderId}`,
                    headers: {
                        access_token: localStorage.access_token
                    },
                });

                Swal.fire("Success", "Success cancel your order", "success");
                this.fetchProductCart();
                this.router.push(`/cart`);
            } catch (error) {
                console.log(error);
            }
        },

        async fetchOrderList() {
            try {
                const { data } = await axios({
                    method: "GET",
                    url: this.baseURL + "/customers/orders/list",
                    headers: {
                        access_token: localStorage.access_token
                    }
                });

                this.orders = data.data;
            } catch (error) {
                console.log(error);
            }
        },

        async fetchTokenPaymentMidtrans(cost) {
            try {
                const { data } = await axios({
                    method: "POST",
                    url: this.baseURL + "/midtrans/snap-token",
                    headers: {
                        access_token: localStorage.access_token
                    },
                    data: {
                        totalCostNeedToPay: cost
                    }
                });

                this.midtransToken = data.transaction.token;
                return this.midtransToken;
            } catch (error) {
                console.log(error);
            }
        },

        async payButtonMidtrans(token) {
            const callback = this.changeCartToPayed;

            window.snap.pay(`${token}`, {
                onSuccess: function (result) {
                    /* You may add your own implementation here */
                    Swal.fire("Success", "payment success!", "success");
                    callback();
                },
                onPending: function (result) {
                    /* You may add your own implementation here */
                    Swal.fire("Waiting", "wating your payment!", "info");
                },
                onError: function (result) {
                    /* You may add your own implementation here */
                    Swal.fire("Failed", "payment failed!", "error");
                },
                onClose: function () {
                    /* You may add your own implementation here */
                    Swal.fire(
                        "Failed",
                        "you closed the popup without finishing the payment",
                        "warning"
                    );
                },
            })
        },

        async changeCartToPayed() {
            try {
                await axios({
                    method: "PATCH",
                    url: this.baseURL + "/midtrans/change-cart-to-payed",
                    headers: {
                        access_token: localStorage.access_token
                    }
                });

                this.router.push("/order-list")
            } catch (error) {
                console.log(error);
            }
        },

        // Admin Side Fetch Product
        async fetchAdminProductHome() {
            try {
                const { data } = await axios({
                    method: "GET",
                    url: this.baseURL + "/admins/products/list",
                    headers: {
                        access_token: localStorage.access_token
                    }
                });

                this.adminProducts = data.data;
            } catch (error) {
                console.log(error);
            }
        },

        // Admin Change Product Status
        async onChangeProductStatus(status, id) {
            try {
                await axios({
                    method: "PATCH",
                    url: this.baseURL + `/admins/products/status/${id}`,
                    headers: {
                        access_token: localStorage.access_token
                    },
                    data: {
                        productStatus: status
                    }
                });

                Swal.fire("Success", `Success Edit Product Status to ${status}`, "success");
            } catch (error) {
                console.log(error);
            }
        },

        // Fetch Order List Customer
        async fetchAdminOrderListCustomer() {
            try {
                const { data } = await axios({
                    method: "GET",
                    url: this.baseURL + "/admins/orders/list",
                    headers: {
                        access_token: localStorage.access_token
                    }
                });

                this.adminOrderListCustomer = data.data;
            } catch (error) {
                console.log(error);
            }
        },

        // Admin Change Order Status
        async onChangeOrderStatus(status, id) {
            try {
                await axios({
                    method: "PATCH",
                    url: this.baseURL + `/admins/orders/status/${id}`,
                    headers: {
                        access_token: localStorage.access_token
                    },
                    data: {
                        orderStatus: status
                    }
                });

                Swal.fire("Success", `Success Edit Order Status to ${status}`, "success");
            } catch (error) {
                console.log(error);
            }
        },

        // Admin Add New Product
        async adminAddNewProduct(name, price, stock, weight, imageUrl) {
            try {
                await axios({
                    method: "POST",
                    url: this.baseURL + "/admins/products/add",
                    headers: {
                        access_token: localStorage.access_token
                    },
                    data: {
                        name,
                        price,
                        stock,
                        weight,
                        imageUrl
                    }
                });

                Swal.fire("Success", "Success Add New Product", "success");
                this.router.push("/admin");
            } catch (error) {
                // console.log(error);
                Swal.fire(
                    error.response.data.message,
                    error.response.data.error.join(", "),
                    "error"
                );
            }
        },

        async fetchAdminProductDetail(id) {
            try {
                const { data } = await axios({
                    method: "GET",
                    url: this.baseURL + `/admins/products/detail/${id}`,
                    headers: {
                        access_token: localStorage.access_token
                    }
                });

                this.adminProductDetail = data.data;
            } catch (error) {
                // console.log(error);
                if (error.response.data.message === "Data not found") {
                    this.router.push("/admin");
                    Swal.fire(
                        error.response.data.message,
                        error.response.data.error,
                        "error"
                    );
                }
            }
        },
    },
});
