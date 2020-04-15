<?php
  
    class User{
        private $name;
        private $lastname;
        private $birthday;
        private $country;

        
        public function __construct( $name, $lastname, $birthday, $country){
            $this->name = $name;
            $this->lastname = $lastname ;
            $this->birthday = $birthday;
            $this->country = $country;
        }

        /**
         * Get the value of name
         */ 
        public function getName(){
                return $this->name;
        }

        /**
         * Set the value of name
         *
         * @return  self
         */ 
        public function setName($name){
                $this->name = $name;

                return $this;
        }

        /**
         * Get the value of lastname
         */ 
        public function getLastname(){
                return $this->lastname;
        }

        /**
         * Set the value of lastname
         *
         * @return  self
         */ 
        public function setLastname($lastname){
                $this->lastname = $lastname;

                return $this;
        }

        /**
         * Get the value of birthday
         */ 
        public function getBirthday(){
                return $this->birthday;
        }

        /**
         * Set the value of birthday
         *
         * @return  self
         */ 
        public function setBirthday($birthday){
                $this->birthday = $birthday;

                return $this;
        }

        /**
         * Get the value of country
         */ 
        public function getcountry(){
                return $this->country;
        }

        /**
         * Set the value of country
         *
         * @return  self
         */ 
        public function setcountry($country){
                $this->country = $country;

                return $this;
        }

        public function __toString(){
            return $this->name ." ".$this->lastname.
            " (".$this->birthday.", ".$this->country.")";
        }

        public function saveUser($db){
                $result = $db
                        ->getReference('users')
                        ->push([
                                'name'=>$this->name,
                                'lastname'=>$this->lastname,
                                'birthday'=>$this->birthday,
                                'country'=>$this->country
                        ]);
                return $result->getKey();
        }

        public static function getUsers($db){
                $result = $db  ->getReference('users')
                                ->getSnapshot()
                                ->getValue();

                echo json_encode($result);
        }

        public static function getUser($index, $db){
                $result = $db   ->getReference('users')
                                ->getChild($index)
                                ->getSnapshot()
                                ->getValue();

                echo json_encode($result);
        }

        public  function updateUser($index, $db){
                $result = $db  ->getReference('users')
                                ->getChild($index)
                                ->set([
                                        "name"=> $this->name,
                                        "lastname"=> $this->lastname,
                                        "birthday"=> $this->birthday,
                                        "country"=> $this->country
                                ]);
                
                
        }

        public static function removeUser($index, $db){
                $result = $db  ->getReference('users')
                                ->getChild($index)
                                ->remove();
        }

}
?>