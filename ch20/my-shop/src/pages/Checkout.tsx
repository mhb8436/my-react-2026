import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { createOrder } from '../lib/api/orders';
import type { ShippingInfo } from '../types';
import { formatPrice } from '../lib/format'
import EmptyState from '../components/EmptyState';

