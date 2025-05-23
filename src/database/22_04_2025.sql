PGDMP      /                }            users    17.4    17.4     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                           false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                           false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                           false            �           1262    16409    users    DATABASE     k   CREATE DATABASE users WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'pt-BR';
    DROP DATABASE users;
                     postgres    false            �            1259    16420    posts    TABLE     �   CREATE TABLE public.posts (
    id integer NOT NULL,
    usuario_id integer,
    titulo character varying(100) NOT NULL,
    conteudo text NOT NULL
);
    DROP TABLE public.posts;
       public         heap r       postgres    false            �            1259    16419    posts_id_seq    SEQUENCE     �   CREATE SEQUENCE public.posts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.posts_id_seq;
       public               postgres    false    220                        0    0    posts_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.posts_id_seq OWNED BY public.posts.id;
          public               postgres    false    219            �            1259    16411    usuarios    TABLE     �   CREATE TABLE public.usuarios (
    id integer NOT NULL,
    nome character varying(100) NOT NULL,
    email character varying(100) NOT NULL,
    senha character varying(100) NOT NULL
);
    DROP TABLE public.usuarios;
       public         heap r       postgres    false            �            1259    16410    usuarios_id_seq    SEQUENCE     �   CREATE SEQUENCE public.usuarios_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.usuarios_id_seq;
       public               postgres    false    218                       0    0    usuarios_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.usuarios_id_seq OWNED BY public.usuarios.id;
          public               postgres    false    217            ]           2604    16423    posts id    DEFAULT     d   ALTER TABLE ONLY public.posts ALTER COLUMN id SET DEFAULT nextval('public.posts_id_seq'::regclass);
 7   ALTER TABLE public.posts ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    219    220    220            \           2604    16414    usuarios id    DEFAULT     j   ALTER TABLE ONLY public.usuarios ALTER COLUMN id SET DEFAULT nextval('public.usuarios_id_seq'::regclass);
 :   ALTER TABLE public.usuarios ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    217    218    218            �          0    16420    posts 
   TABLE DATA           A   COPY public.posts (id, usuario_id, titulo, conteudo) FROM stdin;
    public               postgres    false    220   �       �          0    16411    usuarios 
   TABLE DATA           :   COPY public.usuarios (id, nome, email, senha) FROM stdin;
    public               postgres    false    218   !                  0    0    posts_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.posts_id_seq', 3, true);
          public               postgres    false    219                       0    0    usuarios_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.usuarios_id_seq', 1, true);
          public               postgres    false    217            c           2606    16427    posts posts_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.posts DROP CONSTRAINT posts_pkey;
       public                 postgres    false    220            _           2606    16418    usuarios usuarios_email_key 
   CONSTRAINT     W   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_email_key UNIQUE (email);
 E   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT usuarios_email_key;
       public                 postgres    false    218            a           2606    16416    usuarios usuarios_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT usuarios_pkey;
       public                 postgres    false    218            d           2606    16428    posts posts_usuario_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_usuario_id_fkey FOREIGN KEY (usuario_id) REFERENCES public.usuarios(id);
 E   ALTER TABLE ONLY public.posts DROP CONSTRAINT posts_usuario_id_fkey;
       public               postgres    false    218    220    4705            �   1   x�3�4��M-U((��M�,�W(�/.�t��+I-M�W �\tY�=... )��      �   )   x�3��*��L���O�wH�M���K���44r0����� �W	*     