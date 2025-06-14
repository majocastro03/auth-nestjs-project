CREATE TABLE billing (
	id serial PRIMARY KEY,
	user_id integer REFERENCES users(id),
	brand_id integer NOT NULL,
	store_id integer NOT NULL,
	resolucion varchar(50),
	prefijo varchar(10),
	rango_inicial varchar(50),
	rango_final varchar(50),
	medio_pago varchar(20),
	vigencia_inicio timestamp,
	vigencia_fin timestamp
);
CREATE TABLE public.users (
	id serial4 NOT NULL,
	uuid_authsupa uuid NOT NULL,
	document varchar(20) NULL,
	email varchar(255) NOT NULL,
	name varchar(100) NULL,
	lastname varchar(100) NULL,
	phone varchar(20) NULL,
	password text NOT NULL,
	address text NULL,
	auth_code varchar(64) NULL,
	mobile varchar(20) NULL,
	roles varchar(20) NULL,
	created_at timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	updated_at timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	CONSTRAINT users_email_key UNIQUE (email),
	CONSTRAINT users_pkey PRIMARY KEY (id)
);