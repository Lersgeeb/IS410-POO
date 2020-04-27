<?php
    class Post{

        private $codigoPost;
        private $codigoUsuario;
        private $contenidoPost;
        private $imagen;
        private $cantidadLikes;

        public function __construct($codigoPost, $codigoUsuario, $contenidoPost, $imagen, $cantidadLikes){
            $this->$codigoPost = $codigoPost ;
            $this->$codigoUsuario = $codigoUsuario ;
            $this->$contenidoPost = $contenidoPost ;
            $this->$imagen = $imagen ;
            $this->$cantidadLikes = $cantidadLikes ;
        }

        /**
         * Set the value of codigoPost
         *
         * @return  self
         */ 
        public function setCodigoPost($codigoPost)
        {
                $this->codigoPost = $codigoPost;

                return $this;
        }

        /**
         * Get the value of codigoPost
         */ 
        public function getCodigoPost()
        {
                return $this->codigoPost;
        }

        /**
         * Get the value of codigoUsuario
         */ 
        public function getCodigoUsuario()
        {
                return $this->codigoUsuario;
        }

        /**
         * Set the value of codigoUsuario
         *
         * @return  self
         */ 
        public function setCodigoUsuario($codigoUsuario)
        {
                $this->codigoUsuario = $codigoUsuario;

                return $this;
        }

        /**
         * Get the value of contenidoPost
         */ 
        public function getContenidoPost()
        {
                return $this->contenidoPost;
        }

        /**
         * Set the value of contenidoPost
         *
         * @return  self
         */ 
        public function setContenidoPost($contenidoPost)
        {
                $this->contenidoPost = $contenidoPost;

                return $this;
        }

        /**
         * Get the value of imagen
         */ 
        public function getImagen()
        {
                return $this->imagen;
        }

        /**
         * Set the value of imagen
         *
         * @return  self
         */ 
        public function setImagen($imagen)
        {
                $this->imagen = $imagen;

                return $this;
        }

        /**
         * Get the value of cantidadLikes
         */ 
        public function getCantidadLikes()
        {
                return $this->cantidadLikes;
        }

        /**
         * Set the value of cantidadLikes
         *
         * @return  self
         */ 
        public function setCantidadLikes($cantidadLikes)
        {
                $this->cantidadLikes = $cantidadLikes;

                return $this;
        }

       
        public static function getPosts(){
                $content  = file_get_contents("../data/posts.json");
                return $content;
        }

        private static function postsfilter($posts, $key, $value){
                $finalposts = [];
                foreach ($posts as $post){
                        if($post[$key]==$value)
                                $finalposts[] = $post;
                }
                return  $finalposts;
        }

        public static function getPostbyId($id){
                $content  = file_get_contents("../data/posts.json");
                $posts = json_decode($content,true);

                $postId = Post::postsfilter($posts,"codigoPost", $id);

                return json_encode($postId[0]);
        }

        public static function getPostbyIndex($index){
                $content  = file_get_contents("../data/posts.json");
                $posts = json_decode($content,true);

                return json_encode($posts[$index]);
        }


        public static function getPostsbyUserId($userCode){
                $content  = file_get_contents("../data/posts.json");
                $posts = json_decode($content,true);
                $postUser = Post::postsfilter($posts,"codigoUsuario", $userCode);


                return json_encode($postUser);
        }
    }