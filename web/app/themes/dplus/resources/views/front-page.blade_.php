@extends('layouts.landing')

@section('content')
@include('partials.frontpage-banner')
@include('partials.frontpage-services')

@component('components.carouselBanner')
@slot('class') glide @endslot
@endcomponent

@include('partials.frontpage-portfolio')
@include('partials.frontpage-contact')
@include('partials.ourclients')
@endsection