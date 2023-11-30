<?php

// Namespace
namespace Hewan;

// Trait
trait SuaraTrait {
    public function buatSuara() {
        echo $this->suara;
    }
}

// Abstract Class
abstract class Hewan {
    protected $nama;
    protected $suara;

    public function __construct($nama) {
        $this->nama = $nama;
    }

    // Abstract Method
    abstract public function gerak();
}

// Inheritance
class Anjing extends Hewan {
    use SuaraTrait;

    public function __construct($nama) {
        parent::__construct($nama);
        $this->suara = "GUK GOkkk! ";
    }

    public function gerak() {
        echo $this->nama . " berlari terbirit-birit.";
    }
}

class Kucing extends Hewan {
    use SuaraTrait;

    public function __construct($nama) {
        parent::__construct($nama);
        $this->suara = "Meow! ";
    }

    public function gerak() {
        echo $this->nama . " sedang berjalan.";
    }
}

// Pembuatan Objek
$anjing = new Anjing("Buddy");
$kucing = new Kucing("Ani");

// Panggilan Metode
echo "Anjing berteriak: ";
$anjing->buatSuara();
echo "\n";
$anjing->gerak();
echo "\n";

echo "Kucing: ";
$kucing->buatSuara();
echo "\n";
$kucing->gerak();
echo "\n";
