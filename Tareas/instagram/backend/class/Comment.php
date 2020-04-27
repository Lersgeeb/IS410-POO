<?php
    class Comment{
        private $codigoComentario; 
        private $codigoPost;
        private $usuario;
        private $comentario;

        public function __construct($codigoComentario, $codigoPost, $usuario, $comentario){
            $this->$codigoComentario = $codigoComentario ;
            $this->$codigoPost = $codigoPost ;
            $this->$usuario = $usuario ;
            $this->$comentario = $comentario ;
        }
        
        

        /**
         * Get the value of comentario
         */ 
        public function getComentario()
        {
                return $this->comentario;
        }

        /**
         * Set the value of comentario
         *
         * @return  self
         */ 
        public function setComentario($comentario)
        {
                $this->comentario = $comentario;

                return $this;
        }

        /**
         * Get the value of codigoComentario
         */ 
        public function getCodigoComentario()
        {
                return $this->codigoComentario;
        }

        /**
         * Set the value of codigoComentario
         *
         * @return  self
         */ 
        public function setCodigoComentario($codigoComentario)
        {
                $this->codigoComentario = $codigoComentario;

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
         * Get the value of usuario
         */ 
        public function getUsuario()
        {
                return $this->usuario;
        }

        /**
         * Set the value of usuario
         *
         * @return  self
         */ 
        public function setUsuario($usuario)
        {
                $this->usuario = $usuario;

                return $this;
        }

        public static function getComments(){
                $content  = file_get_contents("../data/comentarios.json");
                return $content;
        }

        private static function commentsfilter($comments, $key, $value){
                $finalcomments = [];
                foreach ($comments as $comment){
                        if($comment[$key]==$value)
                                $finalcomments[] = $comment;
                }
                return  $finalcomments;
        }


        public static function getCommentbyId($id){
                $content  = file_get_contents("../data/comentarios.json");
                $comments = json_decode($content,true);

                $commentId = Comment::commentsfilter($comments,"codigoComentario", $id);

                return json_encode($commentId[0]);
        }


        public static function getcommentsByPostId($postCode){
                $content  = file_get_contents("../data/comentarios.json");
                $comments = json_decode($content,true);
                $commentPost = comment::commentsfilter($comments,"codigoPost", $postCode);


                return json_encode($commentPost);
        }

        public static function getCommentbyIndex($index){
                $content  = file_get_contents("../data/comentarios.json");
                $comments = json_decode($content,true);

                return json_encode($comments[$index]);
        }
        
    } 


